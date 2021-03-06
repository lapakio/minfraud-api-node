import { ArgumentError } from '../errors';
import Email from './email';

describe('Email()', () => {
  it('throws an error if email.address is not valid', () => {
    const email = () =>
      new Email({
        address: '123',
      });
    expect(email).toThrowError(ArgumentError);
    expect(email).toThrowError('email.address');
  });

  it('throws an error if email.domain is not valid', () => {
    const email = () =>
      new Email({
        domain: '123',
      });
    expect(email).toThrowError(ArgumentError);
    expect(email).toThrowError('email.domain');
  });

  it('constructs', () => {
    expect(() => {
      const email = new Email({
        address: 'foo@bar.com',
        domain: 'bar.com',
      });
    }).not.toThrow();
  });

  it('constructs without email.address', () => {
    expect(() => {
      const email = new Email({
        domain: 'bar.com',
      });
    }).not.toThrow();
  });

  it('hashes email.address', () => {
    const email = new Email({
      address: 'foo@bar.com',
      domain: 'bar.com',
    });

    expect(email.address).toBe('f3ada405ce890b6f8204094deb12d8a8');
  });

  it('sets email.domain if email.address is given', () => {
    const email = new Email({
      address: 'foo@bar.com',
    });

    expect(email.domain).toBe('bar.com');
  });
});
