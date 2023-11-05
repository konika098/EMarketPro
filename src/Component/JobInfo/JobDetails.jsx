
const JobDetails = ({showDatas}) => {
    const {JobCategory} =showDatas
    return (
       <>
       {
         data.filter(showData=> showData.JobCategory === JobCategory)
       }
       </>
    );
};

export default JobDetails;