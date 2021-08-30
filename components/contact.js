import { useCallback, useState } from 'react';
import { Button } from 'theme-ui';

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
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        setData(INITIAL_STATE);
        setSuccess(true);
      } else {
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
        <p sx={{ color: 'green' }}>
          Thank you, I&rsquo;ll get back to you shortly!
        </p>
      )}
      {failure && (
        <p sx={{ color: 'red' }}>
          Sorry, the message could not be sent. Please check that your email
          address is valid.
        </p>
      )}
      <form
        onSubmit={onSubmit}
        sx={{
          '& label': {
            display: 'block',
            marginTop: 1,
          },
          '& input, & textarea': {
            width: '100%',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'secondary',
            borderRadius: 0,
            backgroundColor: 'transparent',
            color: 'text',
          },
        }}
      >
        <div>
          <label>Email</label>
          <input
            type="email"
            required
            name="sender"
            value={data.sender}
            onChange={onChange('sender')}
            disabled={loading}
            sx={{ height: '2.5em' }}
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
            sx={{
              height: '7.5em',
            }}
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
