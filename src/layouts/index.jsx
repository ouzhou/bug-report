import { Link } from 'umi';
export default function Page(props) {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <div
        style={{
          marginRight: 20,
        }}
      >
        <div>
          <Link
            style={{
              fontSize: 20,
            }}
            to="/"
          >
            index
          </Link>
        </div>
        <div>
          <Link
            style={{
              fontSize: 20,
            }}
            to="/users"
          >
            users
          </Link>
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
}
