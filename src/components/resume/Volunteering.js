import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Volunteering = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Recent Volunteering</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Host/Communications Associate"
            subTitle="Paahibu Space"
            result="Ghana"
            des="June 2024 - Present"
          />
          <ResumeCard
            title="Event Host/ Graphic Designer"
            subTitle="On Our Watch Global/ Diasporan Business Community"
            result="Ghana"
            des="Managed event hosting and graphic design responsibilities"
          />
          <ResumeCard
            title="Member"
            subTitle="Ghana CSO Platform on the SDGs"
            result="Ghana"
            des="2023 - Present"
          />
          <ResumeCard
            title="Consultant"
            subTitle="Green Care Africa"
            result="Ghana"
            des="2023 - Present"
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Other Roles</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Member"
            subTitle="Amnesty International"
            result="Ghana"
            des="2020 - Present"
          />
          <ResumeCard
            title="Youth Advisory Board Member"
            subTitle="GH Alliance"
            result="Ghana"
            des="2023"
          />
          <ResumeCard
            title="Social Media Campaign Team member"
            subTitle="Abantu For Development"
            result="Ghana"
            des="2023"
          />
          <ResumeCard
            title="National Communications Director"
            subTitle="SDG Ambassadors Ghana"
            result="Ghana"
            des="2022"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Volunteering; 
