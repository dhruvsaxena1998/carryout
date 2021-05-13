interface JWT {
  secret: string;
  expires: number | string;
}

export default (): JWT => ({
  secret: process.env.JWT_SECRET || "ec6l2fBrCIE9p62GWRB8XQ==",
  expires: process.env.JWT_EXPIRES || "30d",
});
