import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: {sortOrder:string}
}

const UsersPage = ({searchParams:{sortOrder}}:Props) => {

  console.log('sortOrder',sortOrder)

  return (
    <>
      <h2>UsersPage</h2>
      <Link href="/users/new" className="btn">New User</Link>
      <Suspense fallback={<p>Loading....</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
