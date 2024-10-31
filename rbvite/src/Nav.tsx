import { NavLink } from 'react-router-dom';
import { useSession } from './hooks/session-context';
import { FaUserAlt } from 'react-icons/fa';

export default function Nav() {
  const { session } = useSession();
  return (
    <nav className='fixed w-full bg-white/80'>
      <ul className='mb-3 flex h-8 items-center justify-around shadow backdrop-blur-sm'>
        <li>
          <NavLink to='/' replace>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
        <li>
          <NavLink to='/my'>My</NavLink>
        </li>
        <li>
          <NavLink to='/items'>Items</NavLink>
        </li>
        <li>
          <NavLink to='/items/2'>Item2</NavLink>
        </li>
        <li>
          <NavLink to='/hello'>Hello</NavLink>
        </li>
        {session.loginUser && (
          <li className='flex items-center gap-1'>
            <FaUserAlt size={14} className='text-slate-300' />
            {session.loginUser.name}
          </li>
        )}
      </ul>
    </nav>
  );
}
