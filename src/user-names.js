// @flow

type User =
  | {
      firstName?: string,
      lastName?: string,
    }
  | {
      firstName: string,
      lastName: string,
    }
  | {
      firstName: string,
      lastName?: string,
    };

const getInitial = (str: string) => str.charAt(0).toUpperCase();

export const getInitials = ({ firstName = '', lastName = '' }: User): string =>
  `${getInitial(firstName)}${getInitial(lastName)}`;

export const getFullName = ({ firstName = '', lastName = '' }: User): string =>
  firstName && lastName ? `${firstName} ${lastName}` : `${firstName}`;

export const makePosessive = (name: string): string =>
  name.slice(-1) === 's' ? `${name}'` : `${name}'s`;
