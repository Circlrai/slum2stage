"use client"

import { Our_Program } from '@/components/shared'
import React from 'react'

export const Our_ProgramsView = () => {
  return (
    <section className="bg-[#FFF8F5] w-full">
      <div className="flex flex-col px-4 lg:px-0 pt-48">
        <Our_Program
          heading="Dance"
          spanText="Program"
          bgColor='#FFF8F5'
          image="/assets/images/our-program/our-program-1.png"
          quote={`With access to the Slum to Stage program, I get to pursue my passion for dancing, the teachers in my dance class are encouraging and the classes are free. ,\n\nI don’t know that I would have been able to afford it if it was not so. At the Slum to Stage dance classes, I get to exercise my physical body as well as develop my mind`}
          description1={`Dance as an art form can be a tool for entertainment, sports, or even a vehicle for social impact.`}
          description2={`With a curriculum structured by skilled dance teachers, choreographers and psychologists with both the physical and mental wellbeing of our students in mind, Slum to Stage offers free dance trainings to children. Our classes are rigorous yet super fun to ensure that children enjoy their time in class while developing their dance techniques. Supported by a rich international community of professional ballet dancers, our students receive high-quality guidance on how to succeed in their dance journey.`}
          description3={`Through its classes that happen every Saturday, performances and events, our dance programs fosters the socio-emotional and behavioral growth of our students, while ensuring cultural exchange and community engagement in our stakeholders.`}
          description4={`In June every year, Slum to Stage offers open auditions for students ages 5-18 to join the Slum to Stage performing team, to learn from our dance program directors, and perform in at the Slum to Stage event that is set to happen every first Sunday in September...`}
          description5={`At Slum to Stage we don't just aim to be a consortium of 40 dancers and a world renowned artistic organization, but we aim to be a source of civic pride in Nigeria and an engine for educational development.`}
          quoteColor="#662200"
          author="Vanya, Slum 2 Stage Student"

        />

        <Our_Program
          heading="After School"
          spanText="Program"
          bgColor='#44B5D00D'
          image="/assets/images/our-program/our-program-2.png"
          quote={`This focuses on helping students with extra academic support.`}
          description1={`There is a 17 year old boy in the Slum to Stage program who can hardly spell or write correct sentences. He attends a public school. We conducted a writing exercise and compared his outputs with a 6 year old girl from a private school, the difference was clear, the 6 year old child performed Incredibly better. `}
          description2={`The way I approached the slum to stage program changed at that point. I resolved to use Dance as an entry point into the program, but academic excellence laced with social behavioural development as an end result. At this point I did not care if the child became a world class dancer. I just cared that he could dance, read and write better, and become a better creative individual in his community”.`}
          description3={`Our after-school activities is designed to provide a safe, nurturing place of supervision for school age children where there are opportunities to reinforce learning from school, teach social skills and encourage good citizenship. We also ensure that children and young adults gain leadership experience and social skills through participating in organized activities. `}
          description4={`We believe that being involved in an afterschool program helps children and youths avoid unsafe situations and behaviors if left alone at home.`}

          quoteColor="#056980"
        />

        <Our_Program
          heading="Home Visit"
          spanText="Program"
          bgColor='#ffffff'
          image="/assets/images/our-program/our-program-3.png"
          quote={`These visits offer a perspective on each of the individual child’s struggles, what they are lacking (in character and in school).`}
          description1={`Our Slum to Stage Home Visit programs help to establish strong, positive communications between our team members, coordinators and our sponsored children’s parents and guardians. One of the most importance aspect of this  program is that it gives us insights and a glimpse into the lives of the children we support.`}
          description2={`When our coordinators learn about the  children more personal, i.e the road paths the child take when coming to the training centers from their homes , their morning routine , their school work progress, even their neighbors or friends, we become better-equipped to provide each child in our program with the exact support that they desperately need. `}
          description3={`Additionally; when our coordinators visit the homes of our sponsored children, we, in turn get a better idea of what tremendous impact our programs are  having in the lives of the kids we help to support.`}
          quoteColor="#056980"
          borderColor='#000000'
        />

      </div>
    </section>
  )
}
