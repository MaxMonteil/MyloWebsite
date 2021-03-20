<template functional>
  <form
    action="https://app.convertkit.com/forms/1504369/subscriptions"
    class="flex flex-col items-start max-w-3xl mx-auto md:flex-row md:text-xl space-y-4 md:space-y-0 md:space-x-reverse md:space-x-4"
    :class="{
      'justify-start': props.justify === 'right',
      'justify-center': props.justify === 'center',
    }"
    method="post"
    data-sv-form="1504369"
    data-uid="c42848577f"
    data-format="inline"
    data-version="5"
    data-options='{
      "settings": {
        "after_subscribe": {
          "action": "message",
          "success_message": "Thank you for signing up! Make sure to check your email to confirm.",
          "redirect_url": "",
        },
        "analytics": {
          "google": null,
          "facebook": null,
          "segment":null,
          "pinterest":null,
        },
        "powered_by": {
          "show":false,
        },
        "recaptcha": {
          "enabled": false,
        },
        "return_visitor": {
          "action": "show",
           "custom_content": "",
        },
        "version":"5",
    }'
  >
    <slot />
  </form>
</template>

<script>
export default {
  name: 'SignupForm',
  props: {
    justify: {
      type: String,
      default: 'start',
    },
  },
}
</script>
