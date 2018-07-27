// @flow

type UserType =
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

export const getInitials = ({
  firstName = '',
  lastName = '',
}: UserType): string => `${getInitial(firstName)}${getInitial(lastName)}`;

export const getFullName = ({
  firstName = '',
  lastName = '',
}: UserType): string =>
  firstName && lastName ? `${firstName} ${lastName}` : `${firstName}`;

export const makePossessive = (name: string): string =>
  name.slice(-1) === 's' ? `${name}'` : `${name}'s`;
