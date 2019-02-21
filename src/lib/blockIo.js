import BlockIo from 'block_io';

const blockIo = new BlockIo(
  process.env.BLOCK_IO_API_KEY,
  process.env.BLOCK_IO_SECRET_PIN,
  2
);

export const getNewAddress = (x: any): Promise<any> =>
  new Promise((resolve, reject) => {
    blockIo.get_new_address(x, (error: Error | undefined, data: any) => {
      if (error) return reject(error);
      resolve(data);
    });
  });