import AdminSidenav from '../../components/admin/AdminSidenav';
import AdminMenuItems from '../../components/admin/AdminMenuItems';

const MenuItems = () => {
  return (
    <div className='flex justify-between'>
      <AdminSidenav />

      <div className='lg:ml-[25%] w-full max-w-[1440px] mx-auto'>
        <AdminMenuItems />
      </div>

    </div>
  )
}

export default MenuItems