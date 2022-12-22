import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      I am the Dashboard
      <Link
        className="bg-primary-blue text-white text-base py-2 px-20 rounded"
        to="/"
      >
        {' '}
        Home
      </Link>
    </>
  );
};

export default Dashboard;
