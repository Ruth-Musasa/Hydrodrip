import React from 'react';
import Testimonial from '../../components/testimony';
import TitleWithCurveUnderline from '../../components/titleWithUnderline';

const UserTestimonials: React.FC = () => {
  return (
    <section className="py-14 md:py-32 w-11/12 md:w-10/12 m-auto space-y-10 md:space-y-20 ">
      <TitleWithCurveUnderline title="Hear From Our Satisfied Users" classe="text-center items-center"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Testimonial
          imageUrl="../img/photo1.png"
          name="Dr. Simon Bridgewater"
          position="Vice Chancellor, University of Johannesburg"
          message="As a university administrator, watching our campus become a leader in sustainability through HydroWallet has been incredibly rewarding."
        />
        <Testimonial
          imageUrl="../img/photo2.png"
          name="Maria Chen"
          position="Facility Manager, GreenTech Solutions"
          message="Implementing HydroWallet has not only reduced our water costs but also significantly lowered our environmental footprint. It’s a win-win for us and the planet."
        />
        <Testimonial
          imageUrl="../img/photo3.png"
          name="Alice Johnson"
          position="Product Manager"
          message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        />
      </div>
    </section>
  );
}

export default UserTestimonials;
