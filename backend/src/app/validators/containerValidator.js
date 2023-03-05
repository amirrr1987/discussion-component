const z = require('zod');
const containerSchema = z.object({

  owner_id: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  title: z.string(),
  description: z.string(),
  container_type: z.number(),
  is_active: z.boolean(),
  display_setting: z.object({
    show_progress: z.boolean(),
    show_next_button: z.boolean(),
    show_previous_button: z.boolean(),
  }),
  items: z.array(
    z.union([
      z.object({
        owner_id: z.string(),
        created_at: z.string(),
        updated_at: z.string(),
        id: z.string(),
        question_type: z.string(),
        title: z.string(),
        description: z.string(),
        position: z.number(),
        picture: z.string(),
        display_setting: z.object({
          is_visible: z.boolean(),
          is_required: z.boolean(),
          show_question_number: z.boolean(),
          welcome: z.object({ button_label: z.string() }),
        }),
      }),
      z.object({
        owner_id: z.string(),
        created_at: z.string(),
        updated_at: z.string(),
        id: z.string(),
        question_type: z.string(),
        title: z.string(),
        description: z.string(),
        position: z.number(),
        picture: z.string(),
        options: z.array(
          z.object({
            label: z.string(),
            value: z.number(),
            point: z.number(),
            position: z.number(),
            picture: z.string(),
            answer: z.number(),
          })
        ),
        score: z.object({
          coefficient: z.number(),
          value: z.number(),
          feedback_correct_answer: z.string(),
          feedback_wrong_answer: z.string(),
        }),
        display_setting: z.object({
          is_visible: z.boolean(),
          is_required: z.boolean(),
          show_question_number: z.boolean(),
          radio: z.object({
            show_vertical: z.boolean(),
            show_randomize: z.boolean(),
            is_dropdown: z.boolean(),
          }),
        }),
      }),
      z.object({
        owner_id: z.string(),
        created_at: z.string(),
        updated_at: z.string(),
        id: z.string(),
        question_type: z.string(),
        title: z.string(),
        description: z.string(),
        position: z.number(),
        picture: z.string(),
        display_setting: z.object({
          is_visible: z.boolean(),
          is_required: z.boolean(),
          show_question_number: z.boolean(),
          end: z.object({
            is_default: z.boolean(),
            is_redirect: z.boolean(),
            redirect: z.string(),
            url: z.string(),
            button_label: z.string(),
          }),
        }),
      }),
    ])
  ),
  exam_setting: z.object({
    time: z.object({ is_active: z.boolean(), value: z.string() }),
    show_correct_answer: z.boolean(),
    show_performance: z.boolean(),
    evaluation_labels: z.array(
      z.object({ label: z.string(), order: z.number() })
    ),
    show_answer_sheet: z.boolean(),
  }),
  total_answer: z.number(),
  total_poll: z.number(),
  average_score: z.number(),
  is_exam: z.boolean(),
  is_welcome: z.boolean(),
  max_score: z.number(),
  exam_score: z.number(),
  template: z.object({
    owner_id: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
    id: z.string(),
    background: z.object({
      background_color: z.string(),
      image: z.string(),
      size: z.string(),
      is_repeat: z.boolean(),
      opacity: z.number(),
      position: z.string(),
    }),
    question_color: z.string(),
    description_color: z.string(),
    answer_color: z.string(),
    progress_color: z.string(),
    button_color: z.string(),
  }),
});
const containerValidator = ({ data }) => {
  return containerSchema.safeParse(data);
}


const objectId = z.string().uuid()
const objectIdrValidator = ({ id }) => {
  return objectId.safeParse(id);
}

module.exports = { containerValidator, objectIdrValidator }
