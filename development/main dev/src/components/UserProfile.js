import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
const UserProfile = ({ currentUserTokens, chance, _, accounts, contract }) => {
  const [userTokens, setUserTokens] = useState([]);
  const [userTokensUpdated, setUserTokensUpdated] = useState(false);
  const [accountEqual, setAccountEqual] = useState(false);
  let { account } = useParams();

  const getUserTokens = useCallback(async () => {
    if (contract !== null) {
      const output = await currentUserTokens(account, contract);
      if (accounts !== null) {
        if (Number(accounts[0]) === Number(account)) {
          setAccountEqual(true);
        }
      }
      console.log(accounts);
      console.log(output);
      setUserTokens(output);
      setUserTokensUpdated(true);
    }
  }, [currentUserTokens, account, accounts, contract]);

  useEffect(() => {
    getUserTokens();
  }, [account, getUserTokens, accounts]);
  return (
    <div>
      <Helmet>
        <title>8bitfish | User ({account})</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <center>
        <a className="navlink" href="/">
          home
        </a>
        <h1>Account</h1>
        <h1>
          {account} {accountEqual ? "- (You)" : null}
        </h1>
        {userTokensUpdated ? (
          _.map(userTokens, (tokens, key) => {
            return (
              <React.Fragment key={chance.integer()}>
                <a href={`/details/${tokens[1].currentFish.issue}`}>
                  <img key={tokens[0]} src={tokens[0]} alt="" />
                </a>
              </React.Fragment>
            );
          })
        ) : (
          <h1>loading...</h1>
        )}
      </center>
    </div>
  );
};

export default UserProfile;
