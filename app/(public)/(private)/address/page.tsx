'use client';

import Section from '@/components/layouts/section';
import Menu from '@/features/shared/components/menu';
import AddressContainer from "./partials/address-container";
import AddressForm from "./partials/address-form";

const AddressPage = () => {
  return (
    <AddressContainer>
      <Menu />
      <Section title="Delivery Address" className="py-0 md:py-0 md:gap-6">
        <AddressForm />
      </Section>
    </AddressContainer>
  );
};

export default AddressPage;