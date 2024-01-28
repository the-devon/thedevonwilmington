'use client';

import React from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { ArrowTopRightOnSquareIcon, LinkIcon } from '@heroicons/react/16/solid';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    'Neighborhood',
    'Amenities',
    'Contact',
    'Resident portal',
    'Real Estate Agent Resources',
    'Floor Plans',
  ];

  return (
    <Navbar className="bg-background" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link color="foreground" size="lg" href="#" aria-current="page">
            The Devon
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" size="lg" href="#">
            Neighborhood
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" size="lg" href="#">
            Amenities
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" size="lg" href="#">
            Contact
          </Link>
        </NavbarItem>
        <Dropdown
          classNames={{
            content: 'p-1 border rounded-none bg-background',
          }}
        >
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="bg-transparent p-0 text-lg data-[hover=true]:bg-transparent"
                endContent={<ChevronDownIcon className="h-5 w-5" />}
                variant="light"
              >
                Resources
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="The Devon resources"
            itemClasses={{
              base: [
                'rounded-none',
                'text-default-600',
                'transition-opacity',
                'data-[hover=true]:text-foreground',
                'data-[hover=true]:bg-default-100',
                'dark:data-[hover=true]:bg-default-50',
                'data-[selectable=true]:focus:bg-default-50',
                'data-[pressed=true]:opacity-70',
                'data-[focus-visible=true]:ring-default-500',
              ],
              title: ['text-base'],
            }}
          >
            <DropdownItem
              key="resident_portal"
              startContent={
                <ArrowTopRightOnSquareIcon className="h-4 w-4 text-primary" />
              }
            >
              Resident portal
            </DropdownItem>
            <DropdownItem
              key="real_state_agent_resources"
              startContent={
                <ArrowTopRightOnSquareIcon className="h-4 w-4 text-primary" />
              }
            >
              Real Estate Agent Resources
            </DropdownItem>
            <DropdownItem
              key="floor_plans"
              startContent={
                <ArrowTopRightOnSquareIcon className="h-4 w-4 text-primary" />
              }
            >
              Floor Plans
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color="foreground" className="w-full" href="#" size="lg">
              {index > 2 && (
                <ArrowTopRightOnSquareIcon className="mr-2 h-4 w-4 text-primary" />
              )}
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

// Record<"base"｜ "wrapper"｜ "title"｜ "description"｜ "shortcut" ｜ "selectedIcon", string>
