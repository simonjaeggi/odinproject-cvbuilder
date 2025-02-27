

/**
 * Better to use {[key: string]: string} than Record<string, string>.
 * More readable and reflects the exact shape of the object that we expect.
 */
export type ReactSetStateFn<T> = React.Dispatch<React.SetStateAction<T>>;
export type Information = { [key: string]: string } ;
export type Education = { [key: string]: { [key: string]: string } };
 