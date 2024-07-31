export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw new Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const viewInt8 = new DataView(buffer);
  viewInt8.setInt8(position, value);
  return viewInt8;
}
