import React from "react";
import Layout from "../components/Layout";
import ContentNavbar from "../components/ContentNavbar";
import { useRouter } from 'next/router';

const LearningArea = () => {
  const router = useRouter();
  const courseId = router.query.courseId;

  // Dynamically import the component based on courseId
  const CourseDetailComponents = {
    1: React.lazy(() => import("../components/coursedets/QC")),
    2: React.lazy(() => import("../components/coursedets/AI")),
    3: React.lazy(() => import("../components/coursedets/BC")),
    4: React.lazy(() => import("../components/coursedets/CS")),
    5: React.lazy(() => import("../components/coursedets/IOT")),
    6: React.lazy(() => import("../components/coursedets/AR")),
    // Add more components as needed
  };

  const LazyLoadedComponent = CourseDetailComponents[courseId];

  return (
    <Layout>
      <ContentNavbar />
      <div>
        {/* Dynamically load and render the component */}
        {courseId && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <LazyLoadedComponent />
          </React.Suspense>
        )}
      </div>
    </Layout>
  );
};

export default LearningArea;
