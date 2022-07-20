import { useMemo } from 'react';
import Link from './link';
import Header from './header';
import UptimeRobot from './uptimerobot';
import Package from '../../package.json';

function App() {

  const apikeys = useMemo(() => {
    const { ApiKeys } = window.Config;
    if (Array.isArray(ApiKeys)) return ApiKeys;
    if (typeof ApiKeys === 'string') return [ApiKeys];
    return [];
  }, []);

  return (
    <>
      <Header />
      <div className='container'>
        <div id='uptime'>
          {apikeys.map((key) => (
            <UptimeRobot key={key} apikey={key} />
          ))}
        </div>
        <div id='footer'>
          <p>Powered By <Link to='https://uptimerobot.com/' text='UptimeRobot' /> & <Link to='https://github.com/yb/uptime-status/' text='Uptime Status' /></p>
          <p>&copy; 2005-2022 , <Link to='https://uptimerobot.com/' text='whitebear13579' /> All Right Reserved.</p>
        </div>
      </div>
    </>
  );
}

export default App;
