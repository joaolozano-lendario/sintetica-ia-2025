import React from 'react';

export interface TimelineEvent {
  id: number;
  month: string;
  title: string;
  headline: string;
  description: string;
  icon: 'brain' | 'globe' | 'chip' | 'robot' | 'gavel' | 'search' | 'shield';
  category: 'Infraestrutura' | 'Agentes' | 'Regulação' | 'Soberania' | 'Futuro';
  impact: string;
}

export interface SkillData {
  subject: string;
  A: number; // Current Professional
  B: number; // Future Professional (2025+)
  fullMark: number;
}

export interface ComparisonData {
  name: string;
  years: number;
  label: string;
  desc: string;
}

export interface ToolItem {
  name: string;
  category: string;
  description: string;
  access: string;
}

export interface CaseStudy {
  title: string;
  metric: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  source: string;
}

export interface ProfessionGuide {
  area: string;
  icon: React.ReactNode;
  atRisk: string;
  onRise: string;
  keySkill: string;
  description: string;
}

export interface GlossaryTerm {
    term: string;
    definition: string;
}