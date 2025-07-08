import { BlogPost } from '@/types/blog';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import { Citations, Citation, Cite } from '@/components/Citations';

const citations: Citation[] = [
  {
    id: 'nscl-original',
    title:
      'The Neuro-Symbolic Concept Learner: Interpreting Scenes, Words, and Sentences From Natural Supervision',
    authors: [
      'Jiayuan Mao',
      'Chuang Gan',
      'Pushmeet Kohli',
      'Joshua B. Tenenbaum',
      'Jiajun Wu',
    ],
    year: 2019,
    venue: 'arXiv:1904.12584',
    url: 'https://arxiv.org/abs/1904.12584',
  },
  {
    id: 'reasoning-models',
    title: "Reasoning Models Don't Always Say What They Think",
    authors: [
      'Yanda Chen',
      'Joe Benton',
      'Ansh Radhakrishnan',
      'Jonathan Uesato',
      'Carson Denison',
      'John Schulman',
      'Arushi Somani',
      'Peter Hase',
      'Misha Wagner',
      'Fabien Roger',
      'Vlad Mikulik',
      'Samuel R. Bowman',
      'Jan Leike',
      'Jared Kaplan',
      'Ethan Perez',
    ],
    year: 2022,
    venue: 'arXiv:2505.05410',
    url: 'https://arxiv.org/abs/2505.05410',
  },
  {
    id: 'mech-interp',
    title: 'Interpretability Will Not Reliably Find Deceptive AI',
    authors: ['Neel Nanda'],
    year: 2025,
    venue: 'AI Alignment Forum',
    url: 'https://www.alignmentforum.org/posts/PwnadG4BFjaER3MGf/interpretability-will-not-reliably-find-deceptive-ai',
  },
  {
    id: 'reasoning-math',
    title: 'Large Language Models and Mathematical Reasoning Failures',
    authors: ['Johan Boye', 'Birger Moëll'],
    year: 2025,
    venue: 'arXiv:2502.11574',
    url: 'https://arxiv.org/html/2502.11574v1',
  },
  {
    id: 'llm-concepts',
    title:
      'The Geometry of Categorical and Hierarchical Concepts in Large Language Models',
    authors: ['Kiho Park', 'Yo Joong Choe', 'Yibo Jiang', 'Victor Veitch'],
    year: 2024,
    venue: 'arXiv:2406.01506',
    url: 'https://arxiv.org/abs/2406.01506',
  },
];

const post: BlogPost = {
  slug: 'kb-qa',
  title: 'Neuro-Symbolic Concept Learning for Compositional Reasoning',
  date: '2025-07-7',
  excerpt:
    'Current end-to-end models and LLMs often struggle with multi-step compositional reasoning. We introduce a neuro-symbolic concept learning (NSCL) framework for textual question answering that achieves superior compositional generalization.',
  projectId: 'kb-qa',
  citations,
  content: (
    <>
      <p>
        My code is available on{' '}
        <Link
          href="https://github.com/oliveryun11/kb-qa"
          className="inline-flex items-center hover:text-foreground text-foreground-secondary transition-colors duration-200"
        >
          GitHub
          <HiArrowUpRight className="w-4 h-4 ml-1" />
        </Link>
        .
      </p>

      <p>
        Current end-to-end models and LLMs often struggle with multi-step
        compositional reasoning. To address this, we introduce a neuro-symbolic
        concept learning (NSCL) framework for textual question answering. We
        evaluate our model on a synthetically generated task designed to test
        compositional generalization, where models are trained on one-step
        questions and tested on multi-step questions. Our NSCL model achieves
        91.23% accuracy, outperforming a fine-tuned T5 baseline which achieves
        66.67% accuracy. Our findings demonstrate that this neuro-symbolic
        architecture achieves superior compositional generalization. We conclude
        by discussing future directions for building more scalable and
        generalist neuro-symbolic models by moving beyond predefined domain
        knowledge.
      </p>

      <h2>Overview</h2>
      <p>
        In recent years, the field of natural language processing has seen major
        successes in the form of large-scale, end-to-end neural networks. These
        large language models (LLMs) have achieved remarkable performance in
        many tasks, from coding tasks to being adapted for 3D modeling. However,
        recent research has also demonstrated that these models still have
        significant drawbacks and often struggle with key properties
        characteristic of general-purpose intelligence.
      </p>

      <p>
        <strong>Interpretability:</strong> The black-box nature of end-to-end
        models makes the reasoning process of LLMs opaque, hindering trust and
        diagnosability. Research on reasoning models shows that models do not
        always output their reasoning process in chain-of-thought prompting{' '}
        <Cite n={2} />. Furthermore, discussion on mechanistic interpretability
        suggests that a sufficiently powerful model may even obfuscate their
        internal mechanisms <Cite n={3} />.
      </p>

      <p>
        <strong>Multi-step reasoning:</strong> While large language models
        (LLMs) excel at many language tasks, they often falter on novel problems
        requiring multi-step reasoning. This is because their architecture is
        designed to learn and reproduce statistical patterns from their training
        data, rather than to execute formal, logical operations. When faced with
        a problem that requires a new combination of reasoning steps, they lack
        a robust procedure to follow and their performance can degrade
        significantly <Cite n={4} />.
      </p>

      <p>
        <strong>Hallucination:</strong> Another critical weakness of end-to-end
        models is their tendency to hallucinate instead of admitting ignorance.
        Because an LLM&apos;s fundamental goal is to complete a text sequence
        most plausibly, it lacks an inherent mechanism to verify its knowledge
        or recognize when it is being asked to perform a task it was not trained
        for.
      </p>

      <p>
        Recognizing these limitations, we draw inspiration from human cognition
        by treating concepts as the fundamental unit of thought to arrive at the
        Neuro-Symbolic Concept Learning (NSCL) framework. We illustrate the
        strength of reasoning with concepts by applying the idea to a synthetic
        text question answering task.
      </p>

      <p>
        Our approach builds upon the Neuro-Symbolic Concept Learner (NSCL), a
        framework originally used for visual question answering that
        demonstrated data efficiency and compositional generalization{' '}
        <Cite n={1} />. While NSCL has inspired further research, its core
        principles of reasoning with concepts have not been applied to text-only
        domains. The current landscape for textual question answering is
        dominated by the fine-tuning of end-to-end models like BART, which
        struggle with interpretability and novel multi-step reasoning.
        Simultaneously, while there is growing interest in concept learning
        within NLP, this work has largely been analytical—focused on probing
        pre-trained language models to understand what concepts they have
        implicitly learned—rather than building systems that use concepts to
        reason <Cite n={5} />. Our work seeks to adapt the constructive
        methodology of NSCL to build a compositional, multi-step reasoning
        system for textual question answering.
      </p>

      <h2>Method</h2>
      <h3>What are Concepts?</h3>
      <p>
        In the context of our textual question answering (QA) task, we define a
        concept as an instance of a property belonging to an entity that is
        queried in the task. The property itself is referred to as an attribute.
        For instance, if a question is &quot;What is Jimmy&apos;s job?&quot;,
        the entity is Jimmy, the attribute is job, and the specific concept
        could be engineer.
      </p>

      <p>
        Formally, our model represents attributes as distinct vector spaces.
        Concepts are then represented as learnable embeddings within their
        corresponding attribute space. For example, the concepts engineer,
        writer, and doctor are embeddings in the job attribute space. To
        determine which concept applies to an entity, the model projects the
        entity&apos;s embedding into the relevant attribute space, then performs
        operations such as cosine similarity to find the most similar concept.
        Answering &quot;What is Jimmy&apos;s job?&quot; involves projecting the
        embedding for Jimmy into the job space and determining that this vector
        has the highest similarity to the learned concept embedding for
        engineer.
      </p>

      <h3>Experiment and Dataset</h3>
      <p>
        We design an experiment to specifically test for compositional
        generalization in a textual QA task. A synthetic dataset consisting of a
        textual knowledge base and corresponding question-answer pairs is
        synthetically generated. The knowledge base describes entities by three
        attributes: job (e.g., scientist, developer), location (e.g.,
        Washington, California), and company (e.g., Amazon, Google). To
        explicitly test for compositional generalization, we structure the
        train/test split based on reasoning complexity:
      </p>

      <p>
        The training set contains only questions requiring single-step
        reasoning. These questions query a direct attribute of a named entity.
        For example, the question &quot;What is Jimmy&rsquo;s job?&quot;
        (Reasoning: Find Jimmy {'->'} Query job).
      </p>

      <p>
        The test set contains only questions requiring multi-step, compositional
        reasoning. These questions require the model to filter by one attribute
        and query another to determine the final answer. For example, &quot;what
        company does the Washington scientist work for?&quot; (Reasoning: Find
        entities where location is Washington AND job is scientist {'->'} Take
        the resulting entity {'->'} Query company). This requires composing two
        concepts (Washington, scientist) to resolve the first part of the query
        before proceeding, a structure that the model never sees during
        training.
      </p>

      <h3>Model</h3>
      <p>
        Our model architecture consists of three components: an entity and
        global embedding learner, a concept learner, and a program parser.
      </p>

      <h4>Entity and Global Embedding Learner</h4>
      <p>
        This module is responsible for converting the raw textual database into
        structured vector representations for each entity. Using a pretrained
        BERT model, the module first reads the entire textual database and uses
        a mean pooling over the generated token embeddings to compute a single
        global embedding. This vector is designed to capture the overall context
        of the knowledge base. Next, a pre-trained Named-Entity Recognition
        (NER) model extracts entity spans of interest from the text (e.g.,
        Jimmy). Other entity spans (e.g. Washington, engineer) are attributes of
        these spans and therefore do not require an individual entity embedding.
        For each entity span, mean pooling is used over BERT&apos;s token
        embedding output to produce a local span embedding that captures the
        entity&apos;s specific context. Finally, the global embedding is
        concatenated with each entity&apos;s span embedding to produce a
        context-aware entity embedding that is passed forward to be used in
        other modules.
      </p>

      <h4>Concept Learner</h4>
      <p>
        The concept learner learns the semantic meaning of concepts by
        initializing and learning attribute blocks and concept embeddings.
      </p>

      <p>
        The learner maintains a separate attribute block for each of the three
        attributes (job, location, and company). Within each attribute block is
        a learnable transformation taking entity embeddings into the attribute
        space, and learnable concept embeddings. Concepts are learned and
        attributed to specific entities by increasing the similarity between the
        transformed entity embedding and the concept embedding corresponding to
        that entity.
      </p>

      <h4>Program Parser</h4>
      <p>
        This component translates a natural language question into a formal,
        executable program. The model is allowed to execute three functions.
        Scene(): Initializes the entity set to contain all entities.
        Filter(attribute_type, concept): Filters the entity set to contain only
        entities such that the given concept applies. Query(attribute_type):
        Determines the concept that best applies to the current entity set for
        the given attribute type. The program parser takes each question as
        input and outputs a program consisting of the functions above that would
        be executed to produce the final answer of the model.
      </p>

      <p>
        In this experiment, the program parser is not learned. Programs are
        built as part of the data generation process.
      </p>

      <h2>Results</h2>
      <p>
        We evaluate the proposed NSCL model against a fine-tuned
        &quot;google-t5/t5-base&quot; model. Our results show that the NSCL
        model generalizes far better to multi-step reasoning. On the multi-step
        reasoning questions in the test set, the NSCL model achieves 91.23%
        accuracy, outperforming the T5 model baseline which reaches 66.67%
        accuracy.
      </p>

      <div className="flex justify-center my-6">
        <div className="flex flex-col items-center">
          <Image
            src="/kb-qa/model_comparison.png"
            alt="Model comparison showing NSCL achieving 91.23% accuracy vs T5's 66.67% on multi-step reasoning"
            width={600}
            height={400}
            className="rounded"
          />
          <p className="text-sm text-foreground-secondary mt-2 text-center">
            Model performance comparison on training and test set performance.
          </p>
        </div>
      </div>

      <p>
        Notably, the baseline T5 model is able to achieve 100% accuracy on the
        training set, indicating that the model is able to memorize the training
        set but is unable to reason about the facts it has learned flexibly.
        Consequently, this demonstrates the strength of the proposed NSCL model,
        where the model learns discrete concepts and applies them to solve novel
        problems, as opposed to simply memorizing answers to questions.
      </p>

      <h2>Discussion</h2>
      <p>
        Our results demonstrate a clear improvement in the ability of the NSCL
        model to handle compositional reasoning over that of the baseline. By
        explicitly learning concepts for entities of interest in a QA task, the
        model is able to achieve a programmatic way to deal with novel problems.
        Fundamentally, we are able to separate the facts learned by the model
        from the reasoning done by the model, and therefore allow the model to
        apply complex reasoning even when the facts are learned through simpler
        questions. This key insight is what enables true compositional
        generalization, moving beyond the pattern-matching of end-to-end
        systems.
      </p>

      <p>
        These findings seem to suggest a new framework for continual model
        learning. Our experiment demonstrates that a model&apos;s reasoning
        ability can be successfully decoupled from its knowledge of specific
        concepts. This allows for a more modular method for model updates.
        Instead of retraining the whole system to acquire new knowledge, this
        architecture allows for the reasoning engine to remain fixed while the
        library of neuro-symbolic concepts is continually updated. The model can
        learn representations for new concepts and add them to its knowledge
        base. The existing reasoning engine can then leverage these new concepts
        in complex reasoning problems, offering a scalable path toward building
        systems that can learn throughout their lifetime.
      </p>

      <p>
        Furthermore, a separate reasoning engine allows for high
        interpretability. Through the model&apos;s reasoning trace, one can
        inspect the step-by-step logic followed by the model, making its
        high-level reasoning process transparent. Upon error, debugging is also
        simpler, where by inspecting the reasoning trace and concept embeddings
        one can identify errors in the model&apos;s reasoning process and
        underlying knowledge, respectively.
      </p>

      <h2>Limitations</h2>
      <p>
        While our work successfully demonstrates the compositional reasoning
        capabilities of a neuro-symbolic framework, it is important to
        acknowledge several limitations that define the scope of our current
        implementation and offer avenues for future research.
      </p>

      <p>
        Our framework relies on a predefined conceptual structure. We require
        prior knowledge of the relevant attributes (job, location, and company)
        and the set of possible concepts associated with them. This mirrors a
        common limitation in many neuro-symbolic systems, which often depend on
        a predefined domain-specific language and a predefined set of concepts.
        This necessity for a human to explicitly define the domain&apos;s
        structure beforehand restricts the model&apos;s flexibility and its
        ability to scale to more open-ended domains where concepts are not known
        in advance.
      </p>

      <p>
        The strength of modern LLM systems lies in their ability to scale and
        learn on a large-scale corpus. For a neuro-symbolic framework to achieve
        similar scalability, a fully unsupervised method for learning
        attributes, concepts, and reasoning processes is needed. This
        illustrates the largest disadvantage between current neuro-symbolic
        methods and end-to-end LLMs and demonstrates a clear path for creating
        truly generalist neuro-symbolic reasoning models.
      </p>

      <p>
        Furthermore, our experiment relies on a synthetically generated dataset.
        The textual knowledge base is clean, well-structured, and unambiguous.
        This controlled environment simplifies the task and avoids the
        significant challenges of noise, ambiguity, and coreference resolution
        present in real-world text. Furthermore, our model is dependent on the
        performance of an upstream pre-trained NER model for entity
        identification. Any errors or missed entities from this initial step
        would inevitably propagate and lead to failures in the downstream
        reasoning process.
      </p>

      <p>
        Our current implementation remains a proof-of-concept designed
        specifically to isolate and test compositional generalization. The
        program parser was implemented with hard-coded rules to translate
        questions into our DSL, which is not a scalable solution for handling
        diverse reasoning tasks. A more robust system would require a learned
        semantic parser, as described in the original NSCL framework, to
        dynamically handle a wider variety of natural language inputs.
        Furthering the idea of a generalist neuro-symbolic reasoning model, a
        crucial direction of research would be to learn a semantic parser over a
        generalized DSL, instead of an explicitly defined one. Doing so is a key
        step in creating models that can learn and reason across different
        domains.
      </p>

      <h2>Conclusion</h2>
      <p>
        In this work, we addressed the critical challenge of compositional
        generalization in textual question answering, a known weakness of large
        end-to-end models. We presented a neuro-symbolic framework that learns
        explicit concepts and composes them programmatically to answer queries.
        Our experiments confirmed a significant performance gap, with our model
        successfully solving complex, multi-step reasoning problems that caused
        a standard T5 baseline to fail.
      </p>

      <p>
        We speculate that the success of our model stems from its ability to
        separate a symbolic reasoning engine from its learned, neurally-grounded
        knowledge. This architectural choice leads to not only superior
        generalization but also to a system that is highly interpretable, where
        the reasoning process can be verified step-by-step. Furthermore, this
        modularity suggests a promising paradigm for continual learning, where
        new concepts can be added to the model&apos;s library without requiring
        a full-scale retraining of its reasoning capabilities.
      </p>

      <p>
        Our work demonstrates the clear advantages of a neuro-symbolic framework
        in compositional reasoning and simultaneously illuminates the path
        toward building generalist neuro-symbolic models. We have identified
        that the primary challenge for this paradigm is to move beyond the
        reliance on predefined domain knowledge. Future research focused on the
        unsupervised discovery of concepts and reasoning primitives will be the
        critical next step. By establishing the power of a concept-centric
        approach, our work advocates for this research direction as a promising
        path toward creating AI systems that are not only robust and
        trustworthy, but are also capable of complex reasoning in real-world
        applications.
      </p>
      <Citations citations={citations} />
    </>
  ),
};

export default post;
