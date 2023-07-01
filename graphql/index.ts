export const getCustomerQuery = `
    query GetCustomer($email: Email!) {
      customer(by: { email: $email }) {
        firstName
        lastName
        email
        avatarUrl
        id
      }
    }
`;

export const createCustomerMutation = `
    mutation CreateCustomer($input: CustomerCreateInput!) {
      customerCreate(input: $input) {
        customer {
          firstName
          lastName
          email
          avatarUrl
          id
        }
      }
    }
`;
