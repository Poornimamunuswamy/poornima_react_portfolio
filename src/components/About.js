import { Fragment } from "react";
import classes from './CSSFiles/about.module.css';
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";


const About = ()=>{
    
    return (
      <Fragment>
        <section className={classes.outer}>
          <h1>ABOUT ME</h1>
          <p>
            An ardent techie and a graduate with majors in Computer
            Science and Engineering.
          </p>
          <p>
            I would always love to work in a challenging position in an
            organization and contribute my best through persistent hardwork and
            diligence. I often look up for a career that helps me achieve
            progression through continuous learning and implementation.
          </p>
          <p>
            I'm an extrovert personality with exceptional communication skills
            which makes me a perfect team player. My passion towards learning
            new technologies fortifies me as a quick learner. Just because I
            love what I do, I am always flexible and adaptive to the environment
            I'm into.
          </p>
        </section>
        <hr style={{ color: "black", margin: "0px 50px 0px 50px", width:"90%" }} />
        <section className={classes.chronology}>
          <h1>CHRONOLOGY</h1>
          <div className={classes.timeline}>
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  variant="body2"
                  color="text.secondary"
                >
                  2021 - Present
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <LaptopMacIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h5" component="span">
                    Jivox Software India Pvt Ltd.
                  </Typography>
                  <Typography>
                    Developed remarkable digital ads using HTML5, CSS3 and
                    JavaScript. Gained tons of insights on personalized
                    advertising and helping brands gain more than a million
                    impressions everyday across US, APAC and EMEA. Built
                    Prospecting, Retargeting and Email campaigns along with
                    hands-on experience in Jivox IQ platform. Worked closely
                    with business leaders, graphic designers, and QA resources
                    throughout the campaign.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  variant="body2"
                  color="text.secondary"
                >
                  2019 - 2021
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <LaptopMacIcon />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h5" component="span">
                    Tata Consultancy Services
                  </Typography>
                  <Typography>
                    Turned design pages and specific components into using HTML,
                    CSS and JavaScript. Worked with a team of developers to
                    resolve front-end and CSS issues. Standardized all output
                    with a new, responsive, mobile-first approach and strategy.
                    Collaborated with other virtual team members across the
                    globe.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </section>
      </Fragment>
    );
}

export default About;