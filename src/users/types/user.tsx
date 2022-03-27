export enum Gender {
  male = 'male',
  female = 'female'
};

export type User = {
  gender: Gender,
  name: {
    title: string,
    first: string,
    last: string
  },
  location: {
    street: {
      number: number,
      name: string
    },
    city: string,
    state: string,
    country: string,
    postcode: string|number,
    coordinates: {
      latitude: string,
      longitude: string
    },
    timezone: {
      offset: string,
      description: string
    }
  },
  email: string,
  login: {
    uuid: string,
    username: string,
    description?: string,
    password: string,
    salt: string,
    md5: string,
    sha1: string,
    sha256: string
  },
  dob: {
    date: string,
    age: number
  },
  registered: {
    date: string,
    age: number
  },
  phone: string,
  cell: string,
  id: {
    name: string,
    value: any
  },
  picture: {
    large: string,
    medium: string,
    thumbnail: string
  },
  nat: string
};

export const cloneUser = (user:User) => {
  let newUser = {
    ...user,
    name: {
      ...user.name
    },
    location: {
      ...user.location,
      street: {
        ...user.location.street
      },
      coordinates: {
        ...user.location.coordinates
      },
      timezone: {
        ...user.location.timezone
      }
    },
    login: {
      ...user.login
    },
    dob: {
      ...user.dob
    },
    registered: {
      ...user.registered
    },
    id: {
      ...user.id
    },
    picture: {
      ...user.picture
    }
  };
  return newUser;
};