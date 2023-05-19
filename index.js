const Button = (props) => {
  //  Write your code here.
  const { className, children } = props;
  return <button className={className}>{children}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="title">Social Buttons</h1>
    <div>
      <Button className="like" children="Like" />
      <Button className="comment" children="Comment" />
      <Button className="share" children="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
