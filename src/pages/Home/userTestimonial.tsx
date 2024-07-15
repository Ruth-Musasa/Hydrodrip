import React from 'react';
import Testimonial from '../../components/testimony';
import TitleWithCurveUnderline from '../../components/titleWithUnderline';

const UserTestimonials: React.FC = () => {
  return (
    <section className="py-40 w-11/12 md:w-10/12 m-auto space-y-20 ">
      <TitleWithCurveUnderline title="Hear From Our Satisfied Users" classe="items-center"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Testimonial
          imageUrl="src/assets/img/photo1.png"
          name="Dr. Simon Bridgewater"
          position="Vice Chancellor, University of Johannesburg"
          message="As a university administrator, watching our campus become a leader in sustainability through HydroWallet has been incredibly rewarding."
        />
        <Testimonial
          imageUrl="src/assets/img/photo1.png"
          name="Jane Smith"
          position="Marketing Manager"
          message="J'ai eu une expérience merveilleuse. Je recommande vivement ce service à tout le monde."
        />
        <Testimonial
          imageUrl="src/assets/img/photo1.png"
          name="Alice Johnson"
          position="Product Manager"
          message="Le service est très professionnel et les résultats sont au rendez-vous. Merci beaucoup !"
        />
      </div>
    </section>
  );
}

export default UserTestimonials;
