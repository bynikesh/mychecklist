import React from 'react';
import { Link } from 'react-router-dom';

const ProfileSettings = () => (
  <div>
    <nav className="nav nav-pills flex-column flex-sm-row">
      <Link className="flex-sm-fill text-sm-center nav-link active" to="/edit-profile">
				Edit Profile

      </Link>
      <Link className="flex-sm-fill text-sm-center nav-link" to="#">
				Mylist

      </Link>
    </nav>
  </div>
);

export default ProfileSettings;
