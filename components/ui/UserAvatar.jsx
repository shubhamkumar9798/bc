import {
	User,
	LogOut,
  } from 'lucide-react';
  
  import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
  import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuShortcut,
  } from '@/components/ui/dropdown-menu';
  
  
  
  
  export function UserAvatar() {
	
	return (
	  <DropdownMenu>
		<DropdownMenuTrigger asChild>
		  <Avatar>
			<AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
			<AvatarFallback>CN</AvatarFallback>
		  </Avatar>
		</DropdownMenuTrigger>
		<DropdownMenuContent className="w-56">
		  <DropdownMenuLabel>My Account</DropdownMenuLabel>
		  <DropdownMenuSeparator />
		  <DropdownMenuSeparator />
		  <DropdownMenuItem >
			<LogOut className="mr-2 h-4 w-4" />
			<span>Log out</span>
			<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
		  </DropdownMenuItem>
		</DropdownMenuContent>
	  </DropdownMenu>
	);
  }
  