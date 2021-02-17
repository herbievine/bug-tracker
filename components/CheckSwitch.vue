/**
 * Component by Thomas Lombart
 * https://github.com/thomlom
 */

<template>
    <label class="cursor-pointer flex items-center">
        <input
            class="input absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0"
            v-bind="$attrs"
            type="checkbox"
            :checked="checked"
            @change="$emit('switch-change', $event.target.checked)"
        />
        <span class="switch"></span>
        <p class="label">{{ label }}</p>
    </label>
</template>

<script land="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'CheckSwitch',
    inheritAttrs: false,
    props: {
        label: {
            type: String,
            required: true,
        },
        checked: {
            type: Boolean,
            required: true,
        },
    },
})
</script>

<style scoped>

.label {
  margin-left: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.input {
  clip: rect(0, 0, 0, 0);
}

.switch {
  --switch-container-width: 40px;
  --switch-size: calc(var(--switch-container-width) / 2);
  display: flex;
  align-items: center;
  position: relative;
  height: var(--switch-size);
  flex-basis: var(--switch-container-width);
  border-radius: var(--switch-size);
  @apply bg-gray-200;
  flex-shrink: 0;
  transition: background-color 0.25s ease-in-out;
}

.switch::before {
  content: "";
  position: absolute;
  left: 1px;
  height: calc(var(--switch-size) - 4px);
  width: calc(var(--switch-size) - 4px);
  border-radius: 9999px;
  background-color: white;
  @apply border-2 border-gray-200;
  transition: transform 0.2s ease-in-out;
}

.input:checked + .switch {
  @apply bg-blue-400
}

.input:checked + .switch::before {
  @apply border-blue-400;
  transform: translateX(
    calc(var(--switch-container-width) - var(--switch-size))
  );
}

.input:focus + .switch::before {
  @apply border-gray-200
}

.input:focus:checked + .switch::before {
  @apply border-blue-500
}

.input:disabled + .switch {
  @apply bg-gray-200
}

.input:disabled + .switch::before {
  @apply bg-gray-400 border-gray-400
}
</style>