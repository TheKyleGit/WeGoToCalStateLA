import React, { useState } from 'react';

const styles = {
  container: {
    padding: '32px',
    maxWidth: '1000px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    height: '52vh', // Fixed height
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '32px',
  },
  stagesContainer: {
    display: 'flex',
    gap: '14px',
    marginBottom: '32px',
  },
  stageBar: {
    flex: 1,
    cursor: 'pointer',
    padding: '12px',
    textAlign: 'center',
    color: 'white',
    minHeight: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    overflowY: 'auto', // Adds scroll if content is too long
    flex: 1, // Takes remaining space
  },
  contentTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '16px',
    textAlign: 'center',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '12px',
    paddingLeft: '12px', // Reduced from 20px
    position: 'relative',
    display: 'flex', // Added for better bullet alignment
    alignItems: 'flex-start', // Aligns bullet with first line of text
  },
  bullet: {
    marginRight: '8px', // Added space between bullet and text
  }
};

const ProjectRoadmap = () => {
  const [activeStage, setActiveStage] = useState(2);

  const stages = [
    {
      stage: 1,
      color: '#4682B4',
      title: '1. Initial Concept and Investigation',
      content: [
        'Conduct surveys, interviews, and focus groups with target users to understand their needs.',
        'Decide which features to include based on what people want.',
        'We set up the right tools to build the app and ensure everything will be secure and private.'
      ]
    },
    {
      stage: 2,
      color: '#FFA500',
      title: '2. Prototype Development',
      content: [
        'We make simple layouts of each screen to see how the app will flow and look.',
        'We design the app to be attractive, easy to use, and accessible to everyone.',
        'We build a sample version for real people to try, gathering feedback to make improvements.'
      ]
    },
    {
      stage: 3,
      color: '#90EE90',
      title: '3. Refinements and Enhancements',
      content: [
        'We create the parts that people will interact with, ensuring it looks good on any device.',
        'We develop the "behind-the-scenes" parts of the app to manage data and make everything run smoothly.',
        'We put in tools like goal tracking, mood tracking, and other well-being resources.',
        'We test everything to make sure the app is reliable, secure, and easy to use.'
      ]
    },
    {
      stage: 4,
      color: '#FF6B6B',
      title: '4. Official Launch',
      content: [
        'User We release a test version to a small group to make sure everything works well.',
        'We make the app available to everyone and start sharing it with our target audience.'
      ]
    }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>PC & CSULA Senior Project Roadmap 2025</h1>

      <div style={styles.stagesContainer}>
        {stages.map((stage) => {
          const isActive = activeStage === stage.stage;
          return (
            <div
              key={stage.stage}
              onClick={() => setActiveStage(stage.stage)}
              style={{
                ...styles.stageBar,
                backgroundColor: stage.color,
                border: isActive ? '3px solid black' : 'none',
                transform: isActive ? 'scale(1.1)' : 'scale(1)',
                boxShadow: isActive ? '0px 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? '#fff' : 'rgba(255,255,255,0.8)',
                transition: 'all 0.3s ease-in-out',
              }}
            >
              {stage.title}
            </div>
          );
        })}
      </div>

      <div style={styles.content}>
        <h2 style={styles.contentTitle}>
          {stages[activeStage - 1].title}
        </h2>
        <ul style={styles.list}>
          {stages[activeStage - 1].content.map((item, index) => (
            <li key={index} style={styles.listItem}>
              <span style={styles.bullet}>•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectRoadmap;