'use client';

import { useCallback, useState } from 'react';

import { sendContactMessage } from 'app/actions/contact';
import Button from 'components/button';
import styles from 'components/contact.module.css';

const INITIAL_STATE = {
  sender: '',
  message: '',
};

export default function Contact() {
  const [data, setData] = useState(INITIAL_STATE);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setSuccess(false);
      setFailure(false);
      setLoading(true);
      try {
        const result = await sendContactMessage(data);
        if (result.success) {
          setData(INITIAL_STATE);
          setSuccess(true);
        } else {
          setFailure(true);
        }
      } catch {
        setFailure(true);
      }
      setLoading(false);
    },
    [data]
  );

  const onChange = useCallback(
    (field) => (e) =>
      setData((data) => ({
        ...data,
        [field]: e.target.value,
      })),
    []
  );

  return (
    <>
      <h2 id="contact">Contact</h2>
      {success && (
        <p className={styles.success}>
          Thank you, I&rsquo;ll get back to you shortly!
        </p>
      )}
      {failure && (
        <p className={styles.failure}>
          Sorry, the message could not be sent. Please check that your email
          address is valid.
        </p>
      )}
      <form onSubmit={onSubmit} className={styles.form}>
        <div>
          <label>Email</label>
          <input
            type="email"
            required
            name="sender"
            value={data.sender}
            onChange={onChange('sender')}
            disabled={loading}
            className={styles.email}
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            required
            name="message"
            value={data.message}
            onChange={onChange('message')}
            disabled={loading}
            className={styles.message}
          />
        </div>
        <div>
          <Button type="submit" disabled={loading}>
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}
