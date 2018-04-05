import Link from 'next/link';
import { withRouter } from 'next/router';
import { Grid } from 'semantic-ui-react';


const Header = ({ router: { pathname } }) => (
  <header>
    <Grid container>
      <Grid.Row centered >
        <Link prefetch href='/'>
          <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
        </Link>
        <Link prefetch href='/about'>
          <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
        </Link>
      </Grid.Row>
    </Grid>
    <style jsx>{`
      header {
        margin-bottom: 25px;
      }
      a {
        font-size: 14px;
        margin-right: 15px;
        text-decoration: none;
      }
      .is-active {
        text-decoration: underline;
      }
    `}</style>
  </header>
);

export default withRouter(Header);
