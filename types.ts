
// Fix: Import React to provide the required namespace for ReactNode
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ReviewProps {
  name: string;
  role: string;
  initials: string;
  text: string;
}

export interface ProjectProps {
  title: string;
  category: string;
  imageUrl: string;
}