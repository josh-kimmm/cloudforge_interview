// add a conditional so we can ignore server side components when running scripts

/* @ts-ignore */
if (process.env.NODE_ENV !== 'script') {
  throw new Error(
    'This module cannot be imported from a Client Component module. ' +
      'It should only be used from a Server Component.'
  );
}
