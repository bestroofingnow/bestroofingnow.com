import { redirect } from 'next/navigation';

// Redirect all 404s to homepage
export default function NotFound() {
  redirect('/');
}
