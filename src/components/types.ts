export enum AttachmentStyle {
    Anxious = 'Anxious',
    Avoidant = 'Avoidant',
    Secure = 'Secure',
    None = 'None',
}  

export type Card = {
    question: string
    attachmentStyle: string
}
  
export type Reference = {
    current: any
}
  
export const Questionaire:Array<Card> = [
    {
      question: 'I find it easy to be affectionate with my partner.',
      attachmentStyle: AttachmentStyle.Secure,
    },
    {
      question: 'I feel comfortable depending on romantic partners.',
      attachmentStyle: AttachmentStyle.Secure,
    },
    {
      question: `I fear that once someone gets to know the real me, s/he won’t like who I am.`,
      attachmentStyle: AttachmentStyle.Anxious,
    },
    {
      question: 'I often worry that my partner will stop loving me.',
      attachmentStyle: AttachmentStyle.Anxious,
    },
    {
      question: 'I find that I bounce back quickly after a breakup. It’s weird how I can just put someone out of my mind.',
      attachmentStyle: AttachmentStyle.Avoidant,
    },
    {
      question: 'I find it difficult to emotionally support my partner when s/he is feeling down.',
      attachmentStyle: AttachmentStyle.Avoidant,
    },
    {
      question: 'When I’m not involved in a relationship, I feel somewhat anxious and incomplete.',
      attachmentStyle: AttachmentStyle.Anxious,
    },
    {
      question: 'When my partner is away, I’m afraid that s/he might become interested in someone else.',
      attachmentStyle: AttachmentStyle.Anxious,
    },
  
    {
      question: 'My independence is more important to me than my relationships.',
      attachmentStyle: AttachmentStyle.Avoidant,
    },
    {
      question: 'I prefer not to share my innermost feelings with my partner.',
      attachmentStyle: AttachmentStyle.Avoidant,
    },
    {
      question: 'When I show my partner how I feel, I’m afraid s/he will not feel the same about me.',
      attachmentStyle: AttachmentStyle.Anxious,
    },
    {
      question: 'I am generally satisfied with my romantic relationships.',
      attachmentStyle: AttachmentStyle.Secure,
    },
    {
      question: 'I don’t feel the need to act out much in my romantic relationships.',
      attachmentStyle: AttachmentStyle.Secure,
    },
    {
      question: 'I think about my relationships a lot.',
      attachmentStyle: AttachmentStyle.Anxious,
    },
    {
      question: 'I find it difficult to depend on romantic partners.',
      attachmentStyle: AttachmentStyle.Avoidant,
    },
    {
      question: 'I tend to get very quickly attached to a romantic partner.',
      attachmentStyle: AttachmentStyle.Anxious,
    },
    {
      question: 'I have little difficulty expressing my needs and wants to my partner.',
      attachmentStyle: AttachmentStyle.Secure,
    },
    {
      question: 'I sometimes feel angry or annoyed with my partner without knowing why.',
      attachmentStyle: AttachmentStyle.Avoidant,
    },
    {
      question: 'I am very sensitive to my partner’s moods.',
      attachmentStyle: AttachmentStyle.Anxious,
    },
    {
      question: 'I believe most people are essentially honest and dependable.',
      attachmentStyle: AttachmentStyle.Secure,
    },
    {
      question: 'I prefer casual sex with uncommitted partners to intimate sex with one person.',
      attachmentStyle: AttachmentStyle.Avoidant,
    },
    {
      question: 'I’m comfortable sharing my personal thoughts and feelings with my partner.',
      attachmentStyle: AttachmentStyle.Secure,
    },
    {
      question: 'I worry that if my partner leaves me I might never find someone else.',
      attachmentStyle: AttachmentStyle.Anxious,
    },
    {
      question: 'It makes me nervous when my partner gets too close.',
      attachmentStyle: AttachmentStyle.Avoidant,
    },
    {
      question: 'During a conflict, I tend to impulsively do or say things I later regret, rather than be able to reason about things.',
      attachmentStyle: AttachmentStyle.Anxious,
    },
    {
      question: 'An argument with my partner doesn’t usually cause me to question our entire relationship.',
      attachmentStyle: AttachmentStyle.Secure,
    },
    {
      question: 'My partners often want me to be more intimate than I feel comfortable being.',
      attachmentStyle: AttachmentStyle.Avoidant,
    },
    {
      question: 'I worry that I’m not attractive enough.',
      attachmentStyle: AttachmentStyle.Anxious,
    },
    {
      question: 'Sometimes people see me as boring because I create little drama in relationships.',
      attachmentStyle: AttachmentStyle.Secure,
    },
    {
      question: 'I miss my partner when we’re apart, but then when we’re together I feel the need to escape.',
      attachmentStyle: AttachmentStyle.Avoidant,
    },
    {
      question: 'When I disagree with someone, I feel comfortable expressing my opinions.',
      attachmentStyle: AttachmentStyle.Secure,
    },
    {
      question: 'I hate feeling that other people depend on me.',
      attachmentStyle: AttachmentStyle.Avoidant,
    },
    {
      question: 'If I notice that someone I’m interested in is checking out other people, I don’t let it faze me. I might feel a pang of jealousy, but it’s fleeting.',
      attachmentStyle: AttachmentStyle.Secure,
    },
    {
      question: 'If I notice that someone I’m interested in is checking out other people, I feel relieved—it means s/he’s not looking to make things exclusive.',
      attachmentStyle: AttachmentStyle.Avoidant,
    },
    {
      question: 'If I notice that someone I’m interested in is checking out other people, it makes me feel depressed.',
      attachmentStyle: AttachmentStyle.Anxious,
    },
    {
      question: 'If someone I’ve been dating begins to act cold and distant, I may wonder what’s happened, but I’ll know it’s probably not about me.',
      attachmentStyle: AttachmentStyle.Secure,
    },
    {
      question: 'If someone I’ve been dating begins to act cold and distant, I’ll probably be indifferent; I might even be relieved.',
      attachmentStyle: AttachmentStyle.Avoidant,
    },
    {
      question: 'If someone I’ve been dating begins to act cold and distant, I’ll worry that I’ve done something wrong.',
      attachmentStyle: AttachmentStyle.Secure,
    },
  
    {
      question: 'If my partner was to break up with me, I’d try my best to show her/him what s/he is missing (a little jealousy can’t hurt).',
      attachmentStyle: AttachmentStyle.Secure,
    },
    {
      question: 'If someone I’ve been dating for several months tells me s/he wants to stop seeing me, I’d feel hurt at first, but I’d get over it.',
      attachmentStyle: AttachmentStyle.Anxious,
    },
    {
      question: 'Sometimes when I get what I want in a relationship, I’m not sure what I want anymore.',
      attachmentStyle: AttachmentStyle.Avoidant,
    },
    {
      question: 'I won’t have much of a problem staying in touch with my ex (strictly platonic)—after all, we have a lot in common.',
      attachmentStyle: AttachmentStyle.Secure,
    },
]

export type AttachmentStyleTracker = {
  secure: number,
  anxios: number,
  avoidant: number,
  active: AttachmentStyle 
}