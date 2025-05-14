export const FooterMyBar = () => {
  return (
    <div className="flex w-screen justify-center border-t-2 py-3 px-22">
      <div className="flex flex-row w-full max-w-[1440px] items-center justify-between font-finlandica">
        <p className="font-bold">NewsGo.mn © 2023</p>
        <ul className="flex gap-3">
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Email</li>
          <li>RSS feed</li>
          <li>Add to Feedly</li>
        </ul>
      </div>
    </div>
  );
};
