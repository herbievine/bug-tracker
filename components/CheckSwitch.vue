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
  --light-gray: #e2e8f0;
  --gray: #cbd5e0;
  --dark-gray: #a0aec0;
  --teal: #4fd1c5;
  --dark-teal: #319795;
  display: flex;
  align-items: center;
  position: relative;
  height: var(--switch-size);
  flex-basis: var(--switch-container-width);
  border-radius: var(--switch-size);
  background-color: var(--light-gray);
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
  border: 2px solid var(--light-gray);
  transition: transform 0.2s ease-in-out;
}

.input:checked + .switch {
  background-color: var(--teal);
}

.input:checked + .switch::before {
  border-color: var(--teal);
  transform: translateX(
    calc(var(--switch-container-width) - var(--switch-size))
  );
}

.input:focus + .switch::before {
  border-color: var(--gray);
}

.input:focus:checked + .switch::before {
  border-color: var(--dark-teal);
}

.input:disabled + .switch {
  background-color: var(--gray);
}

.input:disabled + .switch::before {
  background-color: var(--dark-gray);
  border-color: var(--dark-gray);
}
</style>