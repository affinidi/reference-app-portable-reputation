import { createMocks } from 'node-mocks-http';
import { handler } from '../../../../pages/api/profiles/get-vcs';

describe('/api/profiles/get-vcs', () => {
  it('should respond with profile VCs', async () => {
    const { req, res } = createMocks({ method: 'GET' });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        message: 'Your favorite animal is dog',
      }),
    );
  });
});
