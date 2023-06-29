import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cv';

  public tags = ['Product Design', 'Figma', 'UI/UX', 'Research', 'User Testing', 'Prototype', 'Leadership', 'Design Systems Development', 'Agile', 'Team Leading', 'Product Development', 'Team Growth', 'UI Animations', 'Branding'];
  public summary = [
    '8 years of web and mobile product design experience',
    'Expertise in optimizing design efficiency within cross-functional teams',
    'Proven track record in implementing comprehensive design systems',
    'Proficient in agile methodologies and user-centered design',
    'Skilled in improving hiring processes and building client relationships',
    'Experienced in scaling design teams based on business and product needs',
  ];
  public experience = [
    {
      info: {
        duration: 'Jul 2022 - Present',
        type: 'Full-time, Remote',
        tags: ['SaaS', 'CRM', 'Food Tech', 'B2B', 'B2C', 'Music'],
      },
      about: {
        title: 'Lead Product Designer',
        name: 'NinjaFam',
        text: 'With a focus on driving business value, I contribute to the sustenance and improvement of existing products, while also utilizing my knowledge and leadership skills to initiate and develop new projects from scratch.'
      },
      artifacts: {
        title: 'Artifacts',
        items: [
          {
            name: 'NinjaWok',
            link: ''
          },
          {
            name: 'NinjaPizza',
            link: ''
          },
          {
            name: 'NinjaSushi 2.0',
            link: ''
          },
          {
            name: 'NinjaCRM',
            link: ''
          },
          {
            name: 'Monopoly Music',
            link: ''
          },
          {
            name: 'CalorieNinja',
            link: ''
          }
        ]
      }
    },
    {
      info: {
        duration: 'Mar 2022 - Nov 2022',
        type: 'Full-time, Remote',
        tags: ['SaaS', 'Non-Profit', 'C2C'],
      },
      about: {
        title: 'Co-Founder (Non-Profit)',
        name: 'Turbota',
        text: 'Led the design process, conducted product research and customer development, executed successful marketing strategies, and fostered relationships with key stakeholders, resulting in approximately 36,000 peak users.'
      },
      artifacts: {
        title: 'Artifacts',
        items: [
          {
            name: 'Case Study',
            link: ''
          },
          {
            name: 'AppStore',
            link: ''
          },
        ]
      }
    },
    {
      info: {
        duration: 'Jun 2021 - Mar 2022',
        type: 'Full-time, Remote',
        tags: ['SaaS', 'Analytics', 'CRM', 'B2B'],
      },
      about: {
        title: 'Lead Product Designer',
        name: 'Piano',
        text: 'Designed B2B interfaces for BBC, CNBC, LinkedIn, and Forbes, established a design system team to speed up the process by 20%, developed an agile-based design roadmap, introduced design tokens for a 10% development acceleration, and streamlined the design hiring process.'
      },
      artifacts: {
        title: 'Artifacts',
        items: [
          {
            name: 'UI Snapshots',
            link: ''
          },
          {
            name: 'Concepts',
            link: ''
          },
        ]
      }
    },
    {
      info: {
        duration: 'Apr 2020 - Jun 2021',
        type: 'Full-time, Remote',
        tags: ['SaaS', 'CRM/BPM', 'Fintech', 'B2B', 'B2C'],
      },
      about: {
        title: 'Lead Designer',
        name: 'Kostiushkin Engineering',
        text: 'Led three teams of six designers, recruited five designers, sold design services to three clients through pre-sales and consultations, achieved a 21% increase in referrals and a +14% improvement in LTV90 for a crypto Fintech client.'
      },
      artifacts: {
        title: 'Artifacts',
        items: [
          {
            name: 'Inqud Case Study',
            link: ''
          },
          {
            name: 'DigitalBPM',
            link: ''
          },
        ]
      }
    },
    {
      info: {
        duration: 'March 2019 - Apr 2020',
        type: 'Full-time, Remote',
        tags: ['SaaS', 'Automotive', 'B2B2C'],
      },
      about: {
        title: 'Senior UI\\UX Designer',
        name: 'Innovecs',
        text: 'Designed for Web and iOS platforms, collaborating with clients to deliver MVPs and optimizing design solutions with the development team.'
      },
      artifacts: {
        title: 'Artifacts',
        items: [
          {
            name: 'Web UI',
            link: ''
          },
          {
            name: 'iOS UI',
            link: ''
          },
        ]
      }
    },
    {
      info: {
        duration: 'Jan 2018 - March 2019',
        type: 'Full-time, Remote',
        tags: ['SaaS', 'Management tool', 'Music', 'Video', 'B2C'],
      },
      about: {
        title: 'Product Designer',
        name: 'Pibox',
        text: 'Led product development with a user-centric focus, conducting discovery sessions, user interviews, and utilizing analytics and testing to optimize feature efficiency.'
      },
      artifacts: {
        title: 'Artifacts',
        items: [
          {
            name: 'iOS UI',
            link: ''
          },
          {
            name: 'Web UI',
            link: ''
          },
        ]
      }
    },
    {
      info: {
        duration: 'Jan 2017 - Jan 2018',
        type: 'Full-time',
        tags: ['Agency', 'CRM', 'Fintech', 'Fashion', 'B2C'],
      },
      about: {
        title: 'UI\\UX Designer',
        name: 'Goodface',
        text: 'Designed web platforms, mobile apps, landing pages, and branding materials for fintech and fashion clients, contributing to pre-sales, maintaining strong client relationships, and delivering high-quality projects.'
      },
      artifacts: {
        title: 'Artifacts',
        items: [
          {
            name: 'Neniajewelry',
            link: ''
          },
          {
            name: 'WM Express',
            link: ''
          },
        ]
      }
    },
    {
      info: {
        duration: 'Feb 2016 - Jan 2017',
        type: 'Full-time',
        tags: ['Product', 'B2C'],
      },
      about: {
        title: 'UI Designer',
        name: 'Gogoro',
        text: 'Redesigned and maintained the product website, participated in interface design, and developed the graphical user interface (GUI).'
      },
      artifacts: null
    },
    {
      info: {
        duration: 'Feb 2015 -  Feb 2016',
        type: 'Full-time, Remote',
        tags: ['Freelance'],
      },
      about: {
        title: 'UI/UX Designer',
        name: 'Freelance',
        text: 'Created diverse design assets for multiple clients, collaborating directly to understand their needs and provide tailored solutions.'
      },
      artifacts: null
    }
  ];
}
