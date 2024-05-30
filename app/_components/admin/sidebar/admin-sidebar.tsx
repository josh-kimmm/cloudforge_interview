import { NavItem } from '@/components/nav-item';
import { MetalBarsIcon, QuotesIcon } from '@/components/ui';
import { isSignedOn } from '@/lib/auth';

export default async function AdminSideBar() {
  const signedIn = await isSignedOn();

  if (!signedIn) return null;

  return (
    <>
      <NavItem href="/catalog">
        <MetalBarsIcon className="h-4 w-4" />
        Catalog
      </NavItem>
      <NavItem href="/quotes">
        <QuotesIcon className="h-4 w-4" />
        Quotes
      </NavItem>
    </>
  );
}
