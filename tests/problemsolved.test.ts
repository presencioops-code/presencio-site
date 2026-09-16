import { describe, expect, it } from 'vitest';
import { assertTransition, canTransition, totalScore, validateScore, type ScoreBreakdown } from '../lib/problemsolved/types';

const max:ScoreBreakdown={pain:20,financialConsequence:15,researchBurden:15,demandEvidence:15,existingSpending:10,informationFragmentation:10,pdfSuitability:10,reachability:5};

describe('commercial scoring',()=>{it('totals to 100 at maximum',()=>expect(totalScore(max)).toBe(100));it('rejects out of range components',()=>expect(()=>validateScore({...max,pain:21})).toThrow());});
describe('workflow state machine',()=>{it('allows only declared transitions',()=>{expect(canTransition('OPPORTUNITY_DISCOVERED','VALIDATING')).toBe(true);expect(canTransition('OPPORTUNITY_DISCOVERED','PUBLISHED')).toBe(false);});it('throws on invalid transition',()=>expect(()=>assertTransition('QC','PUBLISHED')).toThrow(/Invalid workflow transition/));it('supports QC retry',()=>expect(canTransition('QC_FAILED','BUILDING')).toBe(true));});
