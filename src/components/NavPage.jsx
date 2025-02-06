import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { 
  BiAnalyse, BiCommentDetail, BiDetail, BiDollar, BiDownload, 
  BiGroup, BiHome, BiLogIn, BiSolidBank, BiTrash 
} from 'react-icons/bi';
import { useLocation, Link } from 'react-router-dom'; // Import useLocation and Link

const navigation = [
  { name: 'Home', icon: <BiHome className="mr-2" />, href: '/', current: false },
  { name: 'Glotte minier', href: '#', current: false },
  { name: 'Evenement', href: '#', current: false },
];

const profileItems = [
  { id: 1, icon: <BiDollar className='text-green-500 mr-2' />, href: '#', current: false, name: "Acheter un mineur" },
  { id: 2, icon: <BiTrash className='text-red-500 mr-2' />, href: '#', current: false, name: "Supprimer" },
  { id: 3, icon: <BiDetail className='text-orange-500 mr-2' />, href: '#', current: false, name: "Détails du fonds" },
  { id: 4, icon: <BiCommentDetail className='text-orange-800 mr-2' />, href: '#', current: false, name: "Détails mineurs" },
  { id: 5, icon: <BiAnalyse className='text-orange-600 mr-2' />, href: '#', current: false, name: "Meneurs" },
  { id: 6, icon: <BiDownload className='text-blue-500 mr-2' />, href: '#', current: false, name: "Téléchargement" },
  { id: 7, icon: <BiSolidBank className='text-green-500 mr-2' />, href: '#', current: false, name: "Banques" },
  { id: 8, icon: <BiGroup className='text-gray-700 mr-2' />, href: '#', current: false, name: "Inviter" },
  { id: 9, icon: <BiLogIn className='text-gray-700 mr-2' />, href: '/Register', current: false, name: "Inscription | Connexion" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavPage() {
  const location = useLocation(); // Use location to get the current URL

  // Update current state of navigation items
  const updatedNavigation = navigation.map(item => ({
    ...item,
    current: location.pathname === item.href, // Set current if the href matches the current URL
  }));

  const updatedProfileItems = profileItems.map(item => ({
    ...item,
    current: location.pathname === item.href, // Set current for profile items as well
  }));

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          {/* Logo and Navigation */}
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <div className="flex shrink-0 items-center">
              <span className='text-red-500 text-2xl font-bold'>A</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {updatedNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'flex items-center rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.icon} {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:ml-6">
            {/* Profile Dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white">
                  <div className="info flex flex-col text-white mr-2 text-xs">
                    <span>Username</span>
                    <span>ID: 8573853</span>
                  </div>
                  <img src="/user.png" alt="User profile" className="h-8 w-8 rounded-full" />
                </MenuButton>
              </div>

              {/* Dropdown Items */}
              <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 z-50 ">
                {updatedProfileItems.map((item) => (
                  <MenuItem key={item.id}>
                    {({ active }) => (
                      <Link
                        to={item.href}
                        className={classNames(
                          active ? 'bg-gray-100' : '',
                          'flex items-center px-4 py-2 text-sm text-gray-700'
                        )}
                      >
                        {item.icon} {item.name}
                      </Link>
                    )}
                  </MenuItem>
                ))}
                <div className="border-t border-gray-200 my-1"></div>
                <MenuItem>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      Sign out
                    </a>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {updatedNavigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.icon} {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
