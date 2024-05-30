'use client';

import { useEffect, useState, useCallback, FormEvent } from 'react';
import { Button, Input } from 'app/_components/ui';

import axios from '@/lib/axios';

import { useRouter } from 'next/navigation';

export default function Email(props: { emailMessage?: string }) {
  const router = useRouter();

  const [clientEmail, setClientEmail] = useState('');
  const [emailMessage, setEmailMessage] = useState('');

  const submitHandler = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();
        const response = await axios.post('/api/email', {
          content: emailMessage,
          client_email: clientEmail
        });

        setClientEmail('');
        setEmailMessage('');

        window.alert(response.data.message);
      } catch (error) {
        console.error('Ruhh rohh an error occurred');
      }
    },
    [emailMessage, clientEmail]
  );

  useEffect(() => {}, []);

  return (
    <form
      className="flex flex-col justify-center items-center"
      method="post"
      onSubmit={submitHandler}
    >
      <label className="my-2 text-center" htmlFor="message">
        Ask us about our inventory and we can send you a quote ASAP!
      </label>
      <Input
        className="p-2 w-4/6 my-2"
        value={clientEmail}
        onChange={(e) => setClientEmail(e.target.value)}
        type={'email'}
        placeholder="Enter your email address here so we can contact you"
      />
      <textarea
        className="p-2 border-2 w-4/6"
        id="message"
        name="message"
        value={emailMessage}
        onChange={(e) => setEmailMessage(e.target.value)}
        placeholder="We can only provide quotes on brass, copper, stainless steel, aluminum, and titanium"
        rows={10}
        cols={50}
      />

      <Button className="mt-4" type="submit">
        Submit
      </Button>
    </form>
  );
}
