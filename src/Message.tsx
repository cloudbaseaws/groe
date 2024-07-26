function Message() {
  const name = "Alaska";
  if (name) return <h1>Hello {name}</h1>;
  return <h1>Good bye</h1>;
}
export default Message;
