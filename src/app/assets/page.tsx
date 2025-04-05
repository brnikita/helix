'use client';

import { useRouter } from 'next/navigation';
import { AssetSelection as AssetSelectionComponent } from '../../screens/AssetSelection';
import { Button } from '../../components/ui/button';

export default function AssetSelectionPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/generate');
  };

  return (
    <div className="relative">
      <AssetSelectionComponent />
      <Button 
        className="absolute bottom-8 right-8 bg-[#ff6b16] hover:bg-[#ff8033] text-white px-6 py-2 rounded-xl font-medium"
        onClick={handleContinue}
      >
        Continue to Generate
      </Button>
    </div>
  );
} 